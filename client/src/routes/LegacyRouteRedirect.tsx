import { Navigate, useLocation } from 'react-router-dom';

export default function LegacyRouteRedirect() {
  const location = useLocation();

  const { pathname, search, hash } = location;
  const normalizedPath = pathname.replace(/^\/+/, '/');
  const prefixMatch = normalizedPath.match(/^\/(c|prompts|skills|agents|search)(\/.*)?$/);

  if (!prefixMatch) {
    return <Navigate to="/ai/c/new" replace />;
  }

  const [, prefix, suffix = ''] = prefixMatch;
  const targetPath = `/ai/${prefix}${suffix}`;

  return <Navigate to={`${targetPath}${search}${hash}`} replace />;
}
