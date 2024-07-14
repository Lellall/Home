import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRefreshTokenMutation } from './auth/auth-api';
import { setSessionExpired } from './auth/auth.slice';


const SessionExpiredModal: React.FC = () => {
    const dispatch = useDispatch();
    const isExpired = useSelector((state: any) => state.auth.isExpired);
    // @ts-expect-error
    const [refreshToken] = useRefreshTokenMutation();

    const handleRefresh = async () => {
        try {
            await refreshToken().unwrap();
            dispatch(setSessionExpired(false));
        } catch (error) {
            console.error('Failed to refresh token:', error);
        }
    };

    if (!isExpired) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <h2 className="text-xl mb-4">Session Expired</h2>
                <p className="mb-4">Your session has expired. Please refresh your session.</p>
                <button onClick={handleRefresh} className="bg-green-500 text-white px-4 py-2 rounded">Refresh Session</button>
            </div>
        </div>
    );
};

export default SessionExpiredModal;
