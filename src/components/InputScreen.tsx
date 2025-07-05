import { toast, Toaster } from "solid-toast";
import { createSignal, onCleanup } from "solid-js";

interface TikTokData {
  status: string | null;
  result: {
    type: string | null;
    author: {
      avatar: string | null;
      nickname: string | null;
    };
    desc: string | null;
    videoSD: string | null;
    videoHD: string | null;
    video_hd: string | null;
    videoWatermark: string | null;
    music: string | null;
    uploadDate?: string | null;
  };
}

type Props = {};

function InputScreen({}: Props) {
  const [url, setUrl] = createSignal("");
  const [data, setData] = createSignal<TikTokData | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");
  const [adLoaded, setAdLoaded] = createSignal(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`/api/tik.json?url=${encodeURIComponent(url())}`);
      let json = await res.json();
      if (json.status == "error") throw new Error(json.message);
      setData(json ?? null);
      loadAd();
      setError("");
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
        position: "bottom-center",
        style: {
          "font-size": "16px",
        },
      });
      setData(null);
    }
    setLoading(false);
  };

  const handlePaste = async () => {
    try {
      const permission = await navigator.permissions.query({ name: 'clipboard-read' as any });
      if (permission.state === 'granted' || permission.state === 'prompt') {
        const text = await navigator.clipboard.readText();
        setUrl(text);
      }
    } catch (err) {
      toast.error("Clipboard access denied");
    }
  };

  const loadAd = () => {
    // Clear previous ad container content
    const adContainer = document.getElementById("ad-banner");
    if (adContainer) {
      adContainer.innerHTML = '';
      adContainer.style.minHeight = '280px'; // Set proper height
      adContainer.style.width = '336px'; // Set proper width
      adContainer.style.margin = '0 auto'; // Center the banner
    }

    // Check if script already exists
    if (!document.getElementById("aclib")) {
      const script = document.createElement("script");
      script.id = "aclib";
      script.src = "//acscdn.com/script/aclib.js";
      script.async = true;
      script.onload = () => {
        setAdLoaded(true);
        if (typeof aclib !== 'undefined') {
          aclib.runBanner({ 
            zoneId: '9480206',
            width: 336,
            height: 280
          });
        }
      };
      script.onerror = () => {
        console.error("Failed to load Adcash script");
        // Fallback content if ad fails to load
        if (adContainer) {
          adContainer.innerHTML = '<div class="ad-placeholder">Advertisement</div>';
        }
      };
      document.body.appendChild(script);
    } else {
      // If script already loaded, just run the banner
      setAdLoaded(true);
      if (typeof aclib !== 'undefined') {
        aclib.runBanner({ 
          zoneId: '9480206',
          width: 336,
          height: 280
        });
      }
    }
  };

  // Clean up the script when component unmounts
  onCleanup(() => {
    const script = document.getElementById("aclib");
    if (script) script.remove();
  });

  return (
    <div class="max-w-6xl mx-auto mt-8 px-4">
      <Toaster />

      {/* Rest of your existing component code remains the same until the ad container */}

      {data() && (
        <div class="mt-6">
          {/* ... other content ... */}
          
          {/* Updated Ad Container */}
          <div class="mt-4 flex justify-center">
            <div id="ad-banner" class="bg-gray-100/20 rounded-lg overflow-hidden">
              {!adLoaded() && (
                <div class="w-[336px] h-[280px] flex items-center justify-center">
                  <div class="animate-pulse text-gray-400">Loading advertisement...</div>
                </div>
              )}
            </div>
          </div>

          {/* ... rest of your component ... */}
        </div>
      )}
    </div>
  );
}

export default InputScreen;