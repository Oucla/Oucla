import React, { useState, useRef, useEffect, useCallback } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Webcam from "react-webcam";

const cameraOptions = [
  {
    label: "360 VR Camera",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        className="mr-2"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4v2M12 18v2M4 12h2M18 12h2M7.76 7.76l1.42 1.42M14.82 14.82l1.42 1.42M7.76 16.24l1.42-1.42M14.82 9.18l1.42-1.42"
          stroke="#111"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Standard Camera",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        className="mr-2"
        viewBox="0 0 24 24"
      >
        <rect
          x="2"
          y="7"
          width="14"
          height="10"
          rx="2"
          stroke="#111"
          strokeWidth="1.6"
        />
        <path d="M16 9l6-3v12l-6-3" stroke="#111" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Screen Share",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        className="mr-2"
        viewBox="0 0 24 24"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="#111"
          strokeWidth="1.6"
        />
        <path
          d="M8 20h8"
          stroke="#111"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const LiveStream: React.FC = () => {
  const [streaming, setStreaming] = useState(false);
  const [cameraIdx, setCameraIdx] = useState(0);
  const [quality, setQuality] = useState("auto");
  const [resolution, setResolution] = useState("1920x1080");
  const [audioSource, setAudioSource] = useState("default");
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const webcamRef = useRef<Webcam>(null);

  // Start camera preview
  const startPreview = async () => {
    try {
      const constraints = {
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: true,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setMediaStream(stream);
      setIsPreviewActive(true);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setMediaStream(
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" as any
      );
    }
  };

  const handleDevices = useCallback(
    (mediaDevices: MediaDeviceInfo[]) => {
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"));
    },
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  // Parse resolution
  const [width, height] = resolution.split("x").map(Number);

  const videoConstraints = {
    width: width,
    height: height,
    deviceId: devices[cameraIdx]?.deviceId,
    facingMode: "user",
  };

  // Stop camera preview
  const stopPreview = () => {
    setIsPreviewActive(false);
    if (webcamRef.current) {
      const stream = webcamRef.current.stream;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  // Start streaming
  const startStream = () => {
    if (!isPreviewActive) {
      startPreview();
    }
    setStreaming(true);
    // Here you would integrate with your streaming service (RTMP, WebRTC, etc.)
  };

  // Stop streaming
  const stopStream = () => {
    setStreaming(false);
    stopPreview();
    // Stop streaming service connection
  };

  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-start ml-5">
        <div className="flex flex-col md:justify-start mb-5">
          <h2 className="font-semibold text-[24px]">Go live</h2>
          <p className="text-[18px] font-normal">
            Configure your stream settings and start broadcasting your event
          </p>
        </div>
        {/* Video Preview */}
        <div className="w-full max-w-[95%] aspect-video rounded-2xl overflow-hidden relative mb-6 shadow-sm bg-gray-900">
          {isPreviewActive ? (
            <Webcam
              ref={webcamRef}
              audio={audioSource !== "system"}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg"
              className="object-cover w-full h-full"
              mirrored={true}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                    <path
                      d="M12 16L36 16M12 32L36 32M12 24L24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Stream Preview</h3>
                <p className="text-gray-400">
                  Click start to begin camera preview
                </p>
              </div>
            </div>
          )}

          {/* Stream Status Indicator */}
          {streaming && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              LIVE
            </div>
          )}

          {/* Play/Preview Button Overlay */}
          {!isPreviewActive && (
            <button
              onClick={startPreview}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <span className="bg-white/90 rounded-full p-6 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group-hover:shadow-xl">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path d="M11 8L22 16L11 24V8Z" fill="#FF9800" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {/* Stream Controls */}
        <div className="w-full max-w-[95%] bg-white rounded-xl shadow border border-[#eaeaea] flex flex-row items-center justify-center gap-4 py-4 px-2 mb-6">
          <button
            className="flex-1 max-w-[200px] bg-[#FF9800] hover:bg-[#ffa733] text-white font-semibold px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={startStream}
            disabled={streaming}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" fill="#fff" />
            </svg>
            {streaming ? "Streaming..." : "Start Stream"}
          </button>
          <button
            className="flex-1 max-w-[200px] bg-white text-black border border-[#ccc] font-semibold px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow hover:bg-gray-100 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={stopStream}
            disabled={!streaming && !isPreviewActive}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#111" strokeWidth="2" />
              <rect x="9" y="9" width="6" height="6" fill="#111" />
            </svg>
            Stop Stream
          </button>
        </div>

        {/* Stream Health */}
        <div className="w-full max-w-[95%] bg-white rounded-xl shadow border border-[#eaeaea] mb-6 px-0 sm:px-6 py-6">
          <h3 className="font-semibold text-lg mb-3 px-6">Stream Health</h3>
          <div className="flex flex-col sm:flex-row gap-3 px-6">
            <div className="flex-1 bg-[#fafafa] border border-[#eaeaea] rounded-lg px-5 py-3 flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <rect
                    x="2"
                    y="7"
                    width="16"
                    height="6"
                    rx="2"
                    stroke="#111"
                    strokeWidth="1.5"
                  />
                </svg>
                Bitrate
              </span>
              <span className="text-lg font-semibold">
                {streaming ? "2.5Mbps" : "0Mbps"}
              </span>
            </div>
            <div className="flex-1 bg-[#fafafa] border border-[#eaeaea] rounded-lg px-5 py-3 flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M2 10h2l2 5 3-10 3 10 2-5h2"
                    stroke="#111"
                    strokeWidth="1.5"
                  />
                </svg>
                Connection
              </span>
              <span
                className={`text-lg font-semibold ${
                  streaming ? "text-green-600" : "text-gray-500"
                }`}
              >
                {streaming ? "Stable" : "Disconnected"}
              </span>
            </div>
            <div className="flex-1 bg-[#fafafa] border border-[#eaeaea] rounded-lg px-5 py-3 flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M10 2a8 8 0 1 1 0 16A8 8 0 0 1 10 2Zm0 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="#111"
                    strokeWidth="1.5"
                  />
                </svg>
                Viewers
              </span>
              <span className="text-lg font-semibold">
                {streaming ? "125" : "0"}
              </span>
            </div>
          </div>
        </div>

        {/* Camera Source */}
        <div className="w-full max-w-[95%] bg-white rounded-xl shadow border border-[#eaeaea] mb-6 px-0 sm:px-6 py-6">
          <h3 className="font-semibold text-lg mb-3 px-6">Camera Source</h3>
          <div className="flex flex-col gap-2 px-0 sm:px-6">
            {cameraOptions.map((opt, idx) => {
              const active = cameraIdx === idx;
              return (
                <button
                  type="button"
                  key={opt.label}
                  onClick={() => setCameraIdx(idx)}
                  className={`w-full flex items-center justify-between text-left px-4 py-5 rounded-lg border border-[#eaeaea] shadow-sm transition-all duration-150 ${
                    active
                      ? "bg-[#FFF3E7] border-[#FF9800]"
                      : "bg-[#F7F7F7] hover:bg-[#f0e4d6]"
                  }`}
                >
                  <span className="flex items-center font-semibold text-base">
                    {opt.icon}
                    {opt.label}
                  </span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2  ${
                      active
                        ? "border-[#FF9800] bg-white"
                        : "border-[#bbb] bg-white"
                    }`}
                  >
                    {active && (
                      <span className="w-3 h-3 rounded-full bg-[#FF9800] block"></span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stream Settings */}
        <div className="w-full max-w-[95%] bg-white rounded-xl shadow border border-[#eaeaea] mb-6 px-0 sm:px-6 py-6">
          <h3 className="font-semibold text-lg mb-3 px-6">Stream Settings</h3>
          <div className="flex flex-col gap-4 px-0 sm:px-6">
            {/* Quality */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <label className="flex-1 text-gray-700 font-medium mb-1 sm:mb-0">
                Quality
              </label>
              <div className="flex-[2] w-full">
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger className="w-full h-12 bg-[#F6F6F6] border-[#eaeaea] text-base font-semibold focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800]">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="720p">720p HD</SelectItem>
                    <SelectItem value="1080p">1080p Full HD</SelectItem>
                    <SelectItem value="4k">4K Ultra HD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Resolution */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <label className="flex-1 text-gray-700 font-medium mb-1 sm:mb-0">
                Resolution
              </label>
              <div className="flex-[2] w-full">
                <Select value={resolution} onValueChange={setResolution}>
                  <SelectTrigger className="w-full h-12 bg-[#F6F6F6] border-[#eaeaea] text-base font-semibold focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800]">
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1920x1080">1920x1080 (16:9)</SelectItem>
                    <SelectItem value="1280x720">1280x720 (16:9)</SelectItem>
                    <SelectItem value="640x480">640x480 (4:3)</SelectItem>
                    <SelectItem value="3840x2160">3840x2160 (4K)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Audio source */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <label className="flex-1 text-gray-700 font-medium mb-1 sm:mb-0">
                Audio source
              </label>
              <div className="flex-[2] w-full">
                <Select value={audioSource} onValueChange={setAudioSource}>
                  <SelectTrigger className="w-full h-12 bg-[#F6F6F6] border-[#eaeaea] text-base font-semibold focus:ring-2 focus:ring-[#FF9800] focus:border-[#FF9800]">
                    <SelectValue placeholder="Select audio source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Microphone</SelectItem>
                    <SelectItem value="external">
                      External Microphone
                    </SelectItem>
                    <SelectItem value="system">System Audio</SelectItem>
                    <SelectItem value="both">
                      Microphone + System Audio
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LiveStream;
