import * as React from 'react'
import * as RModule from 'react-css-modules'
const styles = require('./dashboard.scss')
import Profile from '../Profile/Profile';
import { observer, inject } from 'mobx-react'
import { IUserStore } from '../../store/UserStore'
import FollowersContainer from '../Followers'
import Tracklist from '../Tracklist'
import Player from '../Player'
interface IDashBorardProps {
  UserStore: IUserStore
}
@inject("UserStore")
@observer
@RModule(styles)
class DashBorard extends React.Component<IDashBorardProps, any> {
  render() {
    const userStore = this.props.UserStore;
    const { user } = userStore;

    return (
      <div styleName={'container'}>
        <Tracklist />
        <aside styleName={'aside'}>
          <Profile user={user} />
          <FollowersContainer UserStore={userStore} />
        </aside>
        <Player />
      </div>
    );
  }
}


export default (DashBorard);