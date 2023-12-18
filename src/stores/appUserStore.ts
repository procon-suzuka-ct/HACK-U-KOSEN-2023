import {atom} from 'nanostores';
import {AppUser} from '../utils';

export const appUserStore = atom<AppUser | null>(null);
