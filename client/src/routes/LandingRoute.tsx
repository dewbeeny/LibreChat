import { Link, Navigate } from 'react-router-dom';
import { useLocalize } from '~/hooks';
import { useAuthContext } from '~/hooks/AuthContext';

export default function LandingRoute() {
  const { isAuthenticated } = useAuthContext();
  const localize = useLocalize();

  if (isAuthenticated) {
    return <Navigate to="/ai/c/new" replace />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20 text-slate-50">
      <div className="w-full max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/60 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-400">
          LibreChat
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
          {localize('com_ui_landing_title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {localize('com_ui_landing_description')}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/login"
            className="rounded-full bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-400"
          >
            {localize('com_ui_landing_login')}
          </Link>
          <Link
            to="/ai/c/new"
            className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            {localize('com_ui_landing_open_workspace')}
          </Link>
        </div>
      </div>
    </main>
  );
}
