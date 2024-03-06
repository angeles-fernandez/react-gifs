import { GifItem } from "../../src/components/GifItem";
import { render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem />', () => {
    const title = "Saitama";
    const url = "htpps://one-punch.com/saitama.jpg"

    test('deber de dar match con el snapshot', () => {

        const { container } = render( <GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('deber de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);

    });

    test('deber de mostrar el titulo del componente', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
})