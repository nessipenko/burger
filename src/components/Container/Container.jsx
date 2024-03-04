import classNames from 'classnames';
import style from './Container.module.css';
import React from 'react';
export const Container = ({ children, className }) => (
    <div className={classNames(style.container, className)}>{children}</div>
);
