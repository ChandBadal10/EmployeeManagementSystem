import { Link } from "react-router-dom";
import LoginLeftSide from "../components/LoginLeftSide";
import {
  ArrowRightIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, payroll, and system configurations.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your profile, track attendance, request time off, and access payslips.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome Back
            </h2>
            <p className="text-slate-500">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Portal List */}
          <div className="space-y-4">
            {portalOptions.map((portal) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-white border border-slate-200 group-hover:border-indigo-300">
                        <Icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">
                          {portal.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {portal.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
              <div className="mt-12 text-center md:text-left text-sm text-slate-400">
                <p>@ {new Date().getFullYear()} BadaChand. All rights reserved.</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;