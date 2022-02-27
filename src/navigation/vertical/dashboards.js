// ** Icons Import
import {
    Home,
    Circle,
    Users,
    Book,
    Settings,
    Box,
    Archive,
    UserPlus,
    Trello,
    Briefcase,
    BookOpen,
    CreditCard
} from 'react-feather'

export default [
    {
        id: 'dashboard',
        title: 'මුල් පිටුව ',
        icon: <Home size={12}/>,
        navLink: '/dashboard'
    },
    {
        id: 'cosumers',
        title: 'පාරිභෝගිකයන්',
        icon: <Users size={12}/>,
        navLink: '/consumers/view-consumers/'
    },
    {
        id: 'consumerAccount',
        title: 'පාරිභෝගික ගිණුම්',
        icon: <Book size={12}/>,
        navLink: '/consumer-accounts/add'
    },
    {
        id: 'moneyDebit',
        title: 'මුදල් ලැබීම්',
        icon: <Archive size={12}/>,
        children: [
            {
                id: 'addDebit',
                title: 'ඇතුලත් කිරීම ',
                icon: <Circle size={12}/>,
                navLink: '/debit/add'
            }
        ]
    },
    {
        id: 'bill',
        title: 'බිල්පත්',
        icon: <CreditCard size={12}/>,
        children: [
            {
                id: 'generateBill',
                title: 'ජනනය කිරීම',
                icon: <Circle size={12}/>,
                navLink: '/bill/genrate'
            },
            {
                id: 'searchBill',
                title: 'සොයා බැලීම',
                icon: <Circle size={12}/>,
                navLink: '/bill/search'
            }
        ]
    },
    {
        id: 'expenses',
        title: 'වියදම්',
        icon: <Briefcase size={12}/>,
        children: [
            {
                id: 'addExpenses',
                title: 'ඇතුලත් කිරීම ',
                icon: <Circle size={12}/>,
                navLink: '/expenses/add'
            }
        ]
    },
    {
        id: 'products',
        title: 'භාණ්ඩ',
        icon: <Box size={12}/>,
        children: [
            {
                id: 'addProducts',
                title: 'ඇතුලත් කිරීම ',
                icon: <Circle size={12}/>,
                navLink: '/products/add'
            },
            {
                id: 'buyProducts',
                title: 'මිලදී ගැනීම',
                icon: <Circle size={12}/>,
                navLink: '/products/buy'
            },
            {
                id: 'searchProducts',
                title: 'සොයා බැලීම',
                icon: <Circle size={12}/>,
                navLink: '/products/search'
            }
        ]
    },
    {
        id: 'suppliers',
        title: 'සැපයුම්කරුවන්',
        icon: <UserPlus size={12}/>,
        children: [
            {
                id: 'addSuppliers',
                title: 'ඇතුලත් කිරීම ',
                icon: <Circle size={12}/>,
                navLink: '/suppliers/add'
            },
            {
                id: 'searchSuppliers',
                title: 'සොයා බැලීම',
                icon: <Circle size={12}/>,
                navLink: '/suppliers/search'
            }
        ]
    },
    {
        id: 'accounts',
        title: 'ගිණුම්',
        icon: <Trello size={12}/>,
        children: [
            {
                id: 'transactions',
                title: 'ගණුදෙනු',
                icon: <Circle size={12}/>,
                navLink: '/accounts/transactions'
            },
            {
                id: 'doubleEntries',
                title: 'ද්විත්ව සටහන්',
                icon: <Circle size={12}/>,
                navLink: '/accounts/double-entries'
            },
            {
                id: 'reports',
                title: 'ගිණුම් වාර්තා',
                icon: <Circle size={12}/>,
                navLink: '/accounts/reports'
            },
            {
                id: 'moneyAccounts',
                title: 'මුදල් ගිණුම්',
                icon: <Circle size={12}/>,
                navLink: '/accounts/money-accounts'
            },
            {
                id: 'ledger',
                title: 'ලේජර',
                icon: <Circle size={12}/>,
                navLink: '/accounts/ledger'
            },
            {
                id: 'surcharges',
                title: 'අධිබාර',
                icon: <Circle size={12}/>,
                navLink: '/accounts/surcharges'
            },
            {
                id: 'redBills',
                title: 'රතු බිල්පත්',
                icon: <Circle size={12}/>,
                navLink: '/accounts/red-bills'
            }
        ]
    },
    {
        id: 'settings',
        title: 'සැකසුම්',
        icon: <Settings size={12}/>,
        navLink: "/accounts/settings"
    },
    {
        id: 'reports',
        title: 'වාර්තා',
        icon: <BookOpen size={12}/>,
        navLink: "/accounts/reports"
    }
]
