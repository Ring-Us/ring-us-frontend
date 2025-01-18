import { Outlet } from 'react-router-dom';
import { Fragment } from 'react'; // 수정된 부분

export const RootLayout = () => {
  return (
    <Fragment>
      <main
        className="w-full max-w-[600px] mx-auto p-3 mt-[60px]"
        style={{
          height: 'calc(100dvh - 60px)',
        }}
      >
        <Outlet />
      </main>
    </Fragment>
  );
};
