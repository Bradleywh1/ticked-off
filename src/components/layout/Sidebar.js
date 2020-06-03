import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

export const Sidebar = () => (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li datatest-id="inbox" className="inbox">
                <span>
                    <FaInbox />
                </span>
                <span>Inbox</span>
            </li>
            <li datatest-id="today" className="today">
                <span>
                    <FaRegCalendar />
                </span>
                <span>Today</span>
            </li>
            <li datatest-id="next_7" className="next_7">
                <span>
                    <FaRegCalendarAlt />
                </span>
                <span>Next 7 days</span>
            </li>
        </ul>

        <div className="sidebar__middle">
            <span>
                <FaChevronDown />
            </span>
            <h2>Projects</h2>
        </div>

        <ul className="sidebar__projects">Projects will go here</ul>
        Add Project component here!
    </div>
);