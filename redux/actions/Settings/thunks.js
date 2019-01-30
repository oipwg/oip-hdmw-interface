import {addDisplayCoin, removeDisplayCoin} from "./creators";

export const displayCoin = (coin, bool = true) => dispatch => {
	if (bool) {
		dispatch(addDisplayCoin(coin))
	} else {
		dispatch(removeDisplayCoin(coin))
	}
}