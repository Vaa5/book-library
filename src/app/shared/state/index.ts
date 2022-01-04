import * as AppState from '../../state/app.state';
import { SharedState } from './shared.model';


export interface State extends AppState.State {
  shared: SharedState;
}
