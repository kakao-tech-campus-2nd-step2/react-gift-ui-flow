
import { useParams } from 'react-router-dom';

import ThemeHeader from '@/components/ThemeHeader/ThemeHeader';

const Theme = () => {
	const { themeKey } = useParams<{ themeKey: string }>();

	if (!themeKey) {
		return <div>Invalid theme key</div>;
	}

	return (
		<div>
			<ThemeHeader themeKey={themeKey as string | number} />
			<h1>Theme</h1>
		</div>
	);
}

export default Theme;
