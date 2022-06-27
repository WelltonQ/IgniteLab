import {Logo} from './Logo'

export function Footer() {
	return (
		<footer className="flex items-center justify-between w-full py-5 px-6 border-t border-gray-600">
            <div className="flex items-center gap-5">
                <Logo />
                <span>Rocketseat - Todos os direitos reservados</span>
            </div>
            <span>Políticas de privacidade</span>
		</footer>
	);
};