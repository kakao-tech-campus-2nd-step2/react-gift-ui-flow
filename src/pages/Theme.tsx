
import { useParams } from 'react-router-dom';

import ThemeGoods from '@/components/ThemeGoods/ThemeGoods';
import ThemeHeader from '@/components/ThemeHeader/ThemeHeader';

const Theme = () => {
	const { themeKey } = useParams<{ themeKey: string }>();

	if (!themeKey) {
		return <div>Invalid theme key</div>;
	}

	return (
		<div>
			<ThemeHeader themeKey={themeKey as string | number} />
			<ThemeGoods />
		</div>
	);
}

export default Theme;
