import React from 'react';
import moment from 'moment';
import NotListed from './components/NotListed';

export const dateTimeFormat = date => date ? moment(date).format('MM/DD/YY h:mm:ss a') : <NotListed />;
export const dateFormat = date => date ? moment(date).format('MM/DD/YY') : <NotListed />;
export const safeText = text => text || <NotListed />;
