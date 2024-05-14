import React, { useEffect } from 'react';

const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    modal: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1001
    }
};

const MyModal = ({ open, disableGlobalScroll, children }) => {
    useEffect(() => {
        if (disableGlobalScroll && open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [disableGlobalScroll, open]);

    if (!open) return null;

    return <div style={styles.backdrop}>
        <div style={styles.modal}>
            {children}
        </div>
    </div>;
}

export default MyModal;