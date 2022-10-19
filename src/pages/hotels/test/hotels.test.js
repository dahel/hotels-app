import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import hotelsCollectionFixture from './hotelsCollectionFixture.json';
import hotelsDetailsFixture from './hotelsDetailsFixture.json';
import Hotels from '../Hotels';

describe('Hotels page', () => {
  let server;

  beforeAll(() => {
    server = setupServer(
      rest.get('https://obmng.dbm.guestline.net/api/hotels', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(hotelsCollectionFixture));
      }),
      rest.get('https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:id', (req, res, ctx) => {
        const id = req.params.id;
        const hotelDetails = hotelsDetailsFixture.find((hotel) => hotel.id === id);

        return res(ctx.status(200), ctx.json(hotelDetails));
      })
    );

    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('renders hotels with rooms available for configuration: 5 stars, adults: 2, children: 2', async () => {
    render(
      <Router initialEntries={['/?rating=5&adultsAmount=3&childrenAmount=3']}>
        <Hotels />
      </Router>
    );

    await waitForElementToBeRemoved(screen.queryByTestId('skeleton'));

    expect(screen.queryByText(/hotel 1 \(2 stars\)/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/hotel 2 \(3 stars\)/i)).not.toBeInTheDocument();

    expect(screen.getByText(/hotel 3 \(5 stars\)/i)).toBeInTheDocument();
    expect(screen.queryByText(/eee room \(adults: 2, children: 2\)/i)).not.toBeInTheDocument();
  });

  it('renders hotels with rooms available for configuration: 2 stars, adults: 1, children: 5', async () => {
    render(
      <Router initialEntries={['/?rating=2&adultsAmount=1&childrenAmount=5']}>
        <Hotels />
      </Router>
    );

    await waitForElementToBeRemoved(screen.queryByTestId(/skeleton/i));

    expect(screen.getByText(/hotel 1 \(2 stars\)/i)).toBeInTheDocument();
    expect(screen.queryByText(/hotel 2 \(3 stars\)/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/hotel 3 \(5 stars\)/i)).not.toBeInTheDocument();

    expect(screen.queryByText(/aaa room \(adults: 1, children: 0\)/i)).not.toBeInTheDocument();
    expect(screen.getByText(/bbb room \(adults: 2, children: 5\)/i)).toBeInTheDocument();
  });
});
