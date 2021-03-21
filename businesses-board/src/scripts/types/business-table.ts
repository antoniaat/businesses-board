import { Business } from './business';

interface BusinessTableProps {
    isLoading?: boolean,
    data?: Business[],
    handleProfileChange?: Function,
}

export type { BusinessTableProps };
