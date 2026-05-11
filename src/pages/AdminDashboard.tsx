import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut, FiPieChart, FiBox, FiLayers, FiMessageSquare, FiUsers, FiSettings } from 'react-icons/fi';

export function AdminDashboard() {
  const [admin, setAdmin] = useState<any>(null);
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
    testimonials: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');

    if (!token || !user) {
      navigate('/admin-login');
      return;
    }

    setAdmin(JSON.parse(user));

    // Fetch stats
    const fetchStats = async () => {
      try {
        const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5001/api').replace(/\/$/, '');
        const [projectsRes, servicesRes, testimonialsRes] = await Promise.all([
          fetch(`${apiUrl}/projects`),
          fetch(`${apiUrl}/services`),
          fetch(`${apiUrl}/testimonials`)
        ]);

        const projects = await projectsRes.json();
        const services = await servicesRes.json();
        const testimonials = await testimonialsRes.json();

        setStats({
          projects: projects.length,
          services: services.length,
          testimonials: testimonials.length
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin-login');
  };

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E293B] text-white hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold tracking-tight">EDI<span className="text-blue-500">HUB</span></h2>
          <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">Admin Control</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto">
          <div className="p-3 bg-blue-600 rounded-xl flex items-center gap-3 cursor-pointer">
            <FiPieChart className="w-5 h-5" />
            <span className="font-medium text-sm">Dashboard Overview</span>
          </div>
          {[
            { name: 'Projects', icon: <FiBox /> },
            { name: 'Services', icon: <FiLayers /> },
            { name: 'Testimonials', icon: <FiMessageSquare /> },
            { name: 'Team', icon: <FiUsers /> },
            { name: 'Settings', icon: <FiSettings /> },
          ].map(item => (
            <div key={item.name} className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 cursor-pointer transition-colors text-zinc-400 hover:text-white">
              <div className="text-lg opacity-70">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full p-3 flex items-center gap-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all group"
          >
            <FiLogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold text-zinc-800">Welcome back, {admin.name}</h1>
            <p className="text-xs text-zinc-500">System status: <span className="text-green-500 font-medium">Online</span></p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-zinc-200 pr-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-zinc-900">{admin.email}</div>
                <div className="text-xs text-zinc-500 uppercase font-medium">{admin.role}</div>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {admin.name.charAt(0)}
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-2 group"
              title="Logout"
            >
              <FiLogOut className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider hidden xl:block">Sign Out</span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Total Projects', value: stats.projects, trend: 'From database' },
              { label: 'Active Services', value: stats.services, trend: 'Managed live' },
              { label: 'Testimonials', value: stats.testimonials, trend: 'Verified feedback' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm"
              >
                <div className="text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wider">{stat.label}</div>
                <div className="text-4xl font-black text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-xs text-blue-600 font-bold">{stat.trend}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-zinc-900">Recent Activity</h2>
              <button className="text-sm font-bold text-blue-600 hover:underline">View all</button>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                    {i}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">Server sync successful</div>
                    <div className="text-xs text-zinc-500">Database collection refreshed via cloud Atlas</div>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">2 mins ago</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
