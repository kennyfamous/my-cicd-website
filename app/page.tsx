export default function Home() {
return (
<main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
<div className="max-w-5xl mx-auto px-6 py-16 text-center">
<h1 className="text-6xl font-bold mb-6">
My CI/CD Portfolio
</h1>
<p className="text-2xl text-gray-400 mb-8">
Built with Next.js • Deployed with GitHub Actions CI/CD
</p>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
<h3 className="text-2xl font-semibold mb-3">Project One</h3>
<p className="text-gray-400">Modern E-commerce Platform</p>
</div>
<div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
<h3 className="text-2xl font-semibold mb-3">Project Two</h3>
<p className="text-gray-400">Task Management Dashboard</p>
</div>
<div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
<h3 className="text-2xl font-semibold mb-3">Project Three</h3>
<p className="text-gray-400">Real-time Chat Application</p>
</div>
</div>

<p className="mt-20 text-gray-500">
This website is automatically built and deployed using CI/CD Pipeline
</p>
</div>
</main>
);
}