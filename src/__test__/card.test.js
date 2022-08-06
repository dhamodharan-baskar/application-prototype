import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Containers/Home/components/Card'
import { Provider } from 'react-redux';
import ComponentWrapper from '../testWrapper';

describe('Testing card component', () => {
    test('should render card sucessfully', () => {
      render(<ComponentWrapper>
        <Card />
      </ComponentWrapper>)
      expect(screen.getByText('userdetails-card')).toBeInTheDocument();
    })
})