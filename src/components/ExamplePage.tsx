import { useState } from 'react';
import Button from './Button';
import Card from './Card';

export default function ExamplePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Tailwind CSS Example Page
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page demonstrates the use of custom components with Tailwind CSS
          </p>
        </div>

        {/* Button Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Button Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Primary Buttons</h3>
              <Button text="Small Button" size="sm" variant="primary" />
              <Button text="Medium Button" size="md" variant="primary" />
              <Button text="Large Button" size="lg" variant="primary" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Secondary Buttons</h3>
              <Button text="Small Button" size="sm" variant="secondary" />
              <Button text="Medium Button" size="md" variant="secondary" />
              <Button text="Large Button" size="lg" variant="secondary" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Success Buttons</h3>
              <Button text="Small Button" size="sm" variant="success" />
              <Button text="Medium Button" size="md" variant="success" />
              <Button text="Large Button" size="lg" variant="success" />
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Danger Buttons</h3>
              <Button text="Small Button" size="sm" variant="danger" />
              <Button text="Medium Button" size="md" variant="danger" />
              <Button text="Large Button" size="lg" variant="danger" />
            </div>
          </div>
        </div>

        {/* Interactive Counter Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Counter</h2>
          <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-white">{count}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                text="Increment" 
                variant="success" 
                onClick={() => setCount(count + 1)} 
                fullWidth 
              />
              <Button 
                text="Decrement" 
                variant="danger" 
                onClick={() => setCount(count - 1)} 
                fullWidth 
              />
            </div>
          </div>
        </div>

        {/* Card Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Standard Card" titleColor="text-blue-400">
              <p>This is a standard card with default styling. It has a blue title and hover effect.</p>
            </Card>
            
            <Card title="Custom Card" titleColor="text-purple-400" className="border-purple-900/50">
              <p>This card has a custom border color and purple title text.</p>
              <div className="mt-4">
                <Button text="Learn More" size="sm" variant="secondary" />
              </div>
            </Card>
            
            <Card title="No Hover Effect" titleColor="text-teal-400" hoverEffect={false}>
              <p>This card has the hover effect disabled and uses a teal title color.</p>
              <div className="mt-4 flex space-x-2">
                <Button text="Accept" size="sm" variant="success" />
                <Button text="Decline" size="sm" variant="danger" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}