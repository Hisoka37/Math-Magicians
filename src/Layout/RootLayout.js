import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Math Magician</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Calculator">Calculator</NavLink>
          <NavLink to="Quote">Quote</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
