import { openSnackbar } from '../components/shared/Notifier';

export default function notify(obj) {
	openSnackbar({ message: obj.message || obj.toString() });
}