

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesUseContext } from './MoviesuseContext';

export function App() {

  return (
    <MoviesUseContext>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesUseContext>
  )
}