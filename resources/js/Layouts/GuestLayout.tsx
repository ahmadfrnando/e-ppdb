import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/guest/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/Components/guest/Footer';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
  canLogin: boolean;
  canRegister: boolean;
}

const GuestLayout = ({
  title,
  renderHeader,
  children,
  canLogin,
  canRegister,
}: PropsWithChildren<Props>) => {
  const page = useTypedPage();
  const route = useRoute();

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head title={title} />
      <Navbar canLogin={canLogin} canRegister={canLogin} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
