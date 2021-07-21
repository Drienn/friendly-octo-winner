import React from 'react';
import { render, screen } from '@testing-library/react';
import { WorkOrder } from '../components/WorkOrders';

describe('WorkOrder', () => {
    const mockWorkOrder = {
        id: 'test id',
        dueDate: new Date(2021, 0, 1),
        number: 0,
        status: 'test status',
        title: 'test title',
        priority: 'test priority',
        updatedAt: new Date(2021, 0, 2),
        createdAt: new Date(2021, 0, 3)
    }

    it('should render due date', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('01/01/21')).toBeInTheDocument;
    });

    it('should render work order number', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('0')).toBeInTheDocument;
    });

    it('should render status', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('test status')).toBeInTheDocument;
    });

    it('should render title', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('test title')).toBeInTheDocument;
    });

    it('should render priority', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('test priority')).toBeInTheDocument;
    });

    it('should render updatedAt', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('01/02/21')).toBeInTheDocument;
    });

    it('should render priority', () => {
        render(<WorkOrder workOrder={mockWorkOrder} />);
        expect(screen.getByText('01/03/21')).toBeInTheDocument;
    });
});