import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { generateId } from '@/utils/helpers';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  showNotification: (type: NotificationType, message: string, duration?: number) => void;
  removeNotification: (id: string) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const showNotification = useCallback(
    (type: NotificationType, message: string, duration: number = 5000) => {
      const id = generateId();
      const notification: Notification = { id, type, message, duration };

      setNotifications((prev) => [...prev, notification]);

      // Auto-remove after duration
      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }
    },
    [removeNotification]
  );

  const success = useCallback(
    (message: string, duration?: number) => showNotification('success', message, duration),
    [showNotification]
  );

  const error = useCallback(
    (message: string, duration?: number) => showNotification('error', message, duration),
    [showNotification]
  );

  const warning = useCallback(
    (message: string, duration?: number) => showNotification('warning', message, duration),
    [showNotification]
  );

  const info = useCallback(
    (message: string, duration?: number) => showNotification('info', message, duration),
    [showNotification]
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showNotification,
        removeNotification,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
}
