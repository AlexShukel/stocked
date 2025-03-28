import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { createPxth, Pxth } from 'pxth';

import { Stock, StockContext, useStock, useStockValue } from '../../src';

const initialValues = {
	hello: 'test',
	parent: {
		child: 'value',
	},
	array: [
		1,
		{
			value: 'second',
		},
	],
};

let stock: Stock<typeof initialValues>;

const wrapper: React.FC = ({ children }) => (
	<StockContext.Provider value={stock as unknown as Stock<object>}>{children}</StockContext.Provider>
);

const renderUseStockValue = (path: Pxth<unknown>, useContext = true) =>
	renderHook<{ path: Pxth<unknown> }, unknown>(({ path }) => useStockValue(path, useContext ? undefined : stock), {
		wrapper: useContext ? wrapper : undefined,
		initialProps: {
			path,
		},
	});

beforeEach(() => {
	const { result } = renderHook(() => useStock({ initialValues }), { wrapper });
	stock = result.current;
});

describe('Testing "useStockValue" with context stock', () => {
	it('Should return new value after update', async () => {
		const { result, waitForNextUpdate } = renderUseStockValue(createPxth(['hello']));

		expect(result.current).toBe(initialValues.hello);

		const newValue = 'newValue';

		const promise = act(async () => {
			await waitForNextUpdate({ timeout: 1000 });
		});

		stock.setValue(createPxth(['hello']), newValue);

		await promise;

		expect(result.current).toBe(newValue);
	});

	// TODO decide on the behavior when path changes
	it.skip('should return new value when path changes', async () => {
		const initialPath = createPxth(['hello']);
		const otherPath = createPxth(['parent', 'child']);

		const { result, waitForNextUpdate, rerender } = renderUseStockValue(initialPath);

		const promise = act(async () => {
			await waitForNextUpdate({ timeout: 1000 });
		});

		rerender({ path: otherPath });

		await promise;

		expect(result.current).toBe('value');
	});
});

describe('Testing "useStockValue" with provided stock', () => {
	it('Should return new value after update', async () => {
		const { result, waitForNextUpdate } = renderUseStockValue(createPxth(['hello']), false);

		expect(result.current).toBe(initialValues.hello);

		const newValue = 'newValue';

		const promise = act(async () => {
			await waitForNextUpdate({ timeout: 1000 });
		});

		stock.setValue(createPxth(['hello']), newValue);

		await promise;

		expect(result.current).toBe(newValue);
	});
});
