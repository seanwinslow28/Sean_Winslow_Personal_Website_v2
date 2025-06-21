import React from 'react';
import LottieAnimation, { ScrollTriggeredLottie, HoverLottie, ClickLottie } from './LottieAnimation';

// Example component showing different Lottie usage patterns
const LottieExample = () => {
  // Example animation data (you would import your actual Lottie JSON files)
  const exampleAnimationData = {
    // This would be your actual Lottie animation JSON
    // For now, this is just a placeholder structure
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 60,
    w: 512,
    h: 512,
    nm: "Example Animation",
    ddd: 0,
    assets: [],
    layers: []
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8">Lottie Animation Examples</h2>
      
      {/* Basic Lottie Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Basic Auto-playing Animation</h3>
        <div className="flex justify-center">
          <LottieAnimation
            animationData={exampleAnimationData}
            className="lottie-medium"
            loop={true}
            autoplay={true}
            speed={1}
          />
        </div>
      </div>

      {/* Scroll-triggered Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Scroll-triggered Animation</h3>
        <div className="flex justify-center">
          <ScrollTriggeredLottie
            animationData={exampleAnimationData}
            className="lottie-large lottie-scroll"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Scroll to see this animation play</p>
      </div>

      {/* Hover Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Hover Animation</h3>
        <div className="flex justify-center">
          <HoverLottie
            animationData={exampleAnimationData}
            className="lottie-medium lottie-hover"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Hover to see this animation play</p>
      </div>

      {/* Click Animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Click Animation</h3>
        <div className="flex justify-center">
          <ClickLottie
            animationData={exampleAnimationData}
            className="lottie-medium cursor-pointer"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Click to see this animation play</p>
      </div>

      {/* Custom Animation with Callbacks */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Custom Animation with Events</h3>
        <div className="flex justify-center">
          <LottieAnimation
            animationData={exampleAnimationData}
            className="lottie-medium"
            loop={false}
            autoplay={true}
            speed={0.5}
            onComplete={() => console.log('Animation completed!')}
            onLoopComplete={() => console.log('Loop completed!')}
            style={{
              border: '2px solid #EA9B01',
              borderRadius: '12px',
              padding: '16px'
            }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Check console for event logs</p>
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">How to Use Lottie Animations</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-medium">1. Add your Lottie files:</h4>
            <p className="text-gray-600">Place your .json Lottie files in <code className="bg-gray-200 px-1 rounded">src/assets/lottie/</code></p>
          </div>
          
          <div>
            <h4 className="font-medium">2. Import and use:</h4>
            <pre className="bg-gray-200 p-2 rounded text-xs overflow-x-auto">
{`import LottieAnimation from './components/ui/LottieAnimation';
import myAnimation from './assets/lottie/my-animation.json';

<LottieAnimation 
  animationData={myAnimation}
  className="lottie-medium"
  loop={true}
  autoplay={true}
/>`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium">3. Available size classes:</h4>
            <ul className="text-gray-600 list-disc list-inside">
              <li><code className="bg-gray-200 px-1 rounded">lottie-small</code> - 100x100px</li>
              <li><code className="bg-gray-200 px-1 rounded">lottie-medium</code> - 200x200px</li>
              <li><code className="bg-gray-200 px-1 rounded">lottie-large</code> - 400x400px</li>
              <li><code className="bg-gray-200 px-1 rounded">lottie-fullscreen</code> - Full viewport</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottieExample; 