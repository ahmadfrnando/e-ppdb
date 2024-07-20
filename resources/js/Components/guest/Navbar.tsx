import React from 'react';
import Logo from '../../../../public/img/logonavbar.png';
import { Link, router  } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { HiOutlineBars2 } from 'react-icons/hi2';
import { FaXmark } from "react-icons/fa6";

interface Props {
  canLogin: Boolean;
  canRegister: Boolean;
}

const navs = [
  {
    name: 'Beranda',
    href: 'home',
    active : '/'
  },
  {
    name: 'Profile',
    href: 'profile',
    active : '/profile'
  },
  {
    name: 'Visi dan Misi',
    href: 'visimisi',
    active : '/visi-misi'
  },
  {
    name: 'Kegiatan',
    href: 'kegiatan',
    active : '/kegiatan'
  },
  {
    name: 'Gallery',
    href: 'gallery',
    active : '/gallery'
  },
];

const Navbar = ({ canLogin, canRegister }: Props) => {
  const route = useRoute();
  const page = useTypedPage();
  const [open, setOpen] = React.useState(false);

  const [active, setActive] = React.useState(navs[0]);
  console.log(page.url);

  React.useEffect(() => {
    setActive(navs.find(nav => nav.href === page.url) || navs[0]);
  }, [page.url]);

  const handlePageChange = (url: string) => {
    router.visit(url);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
        <div className="flex w-full lg:w-full items-center justify-between">
          <Link href="/" className="text-lg flex items-center">
            <img src={Logo} alt="ppdb" className="h-12" />
          </Link>
          {/* responsive navbar */}
          <div className="lg:hidden md:hidden">
            <div className='absolute top-0 right-0 p-2 z-50'>
              <button
                onClick={handleOpen}
                className="text-3xl p-2 border-2 border-primary rounded-lg"
              >
                {open ? <FaXmark /> : <HiOutlineBars2 />}
              </button>
            </div>
            <div className={open ? 'hidden' : '' + `h-screen transition-all w-screen absolute bg-white top-0 left-0 z-10 p-20 items-center`}>
              <div className="flex flex-col gap-10 items-center">
                {navs &&
                  navs.map(nav => (
                    <Link
                      key={nav.name}
                      href={route(nav.href)}
                      className="text-2xl flex items-center"
                    >
                      <span className="text-black font-semibold hover:text-cyan-600 ">
                        {nav.name}
                      </span>
                    </Link>
                  ))}
                {canLogin ? (
                  <div className="flex flex-col items-center gap-3 w-full">
                    {page.props.auth.user ? (
                      <Link
                        href={route('dashboard')}
                        className="text-lg flex items-center"
                      >
                        <button className="w-full bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                          Dashboard
                        </button>
                      </Link>
                    ) : (
                      <>
                        <Link
                          href={route('login')}
                          className="w-full text-lg flex items-center"
                        >
                          <button className="w-full bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                            Login
                          </button>
                        </Link>
                        {canRegister ? (
                          <Link
                            href={route('register')}
                            className="text-lg w-full flex items-center"
                          >
                            <button className="w-full bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                              Register
                            </button>
                          </Link>
                        ) : null}
                      </>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex md:flex gap-6">
            {navs.map(nav => (
              <Link
                key={nav.name}
                href={route(nav.href)}
                className="text-lg flex items-center"
              >
                <span className={`font-semibold hover:text-cyan-600 ${nav.active === page.url ? 'text-cyan-600' : 'text-black'}`}>
                  {nav.name}
                </span>
              </Link>
            ))}
            {canLogin ? (
              <div className="flex gap-3">
                {page.props.auth.user ? (
                  <Link
                    href={route('dashboard')}
                    className="text-lg flex items-center"
                  >
                    <button className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link
                      href={route('login')}
                      className="text-lg flex items-center"
                    >
                      <button className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                        Login
                      </button>
                    </Link>
                    {canRegister ? (
                      <Link
                        href={route('register')}
                        className="text-lg flex items-center"
                      >
                        <button className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest">
                          Register
                        </button>
                      </Link>
                    ) : null}
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
