import * as AppState from '../../state/app.state';
import { AuthorState } from '../author.model';

export interface State extends AppState.State {
  authors: AuthorState;
}
