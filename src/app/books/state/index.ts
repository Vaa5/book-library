import * as AppState from '../../state/app.state';
import { BookState } from '../book.model';

export interface State extends AppState.State {
  authors: BookState;
}
