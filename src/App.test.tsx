import React from 'react';
import {render} from '@testing-library/react';
import Copyright from './component/footer/Copyright';

test('renders learn react link', () => {
    const {getByText} = render(
        <Copyright/>
    );

    expect(getByText(/Manager/i)).toBeInTheDocument();
});
