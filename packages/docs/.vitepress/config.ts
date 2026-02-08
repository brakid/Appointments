export default {
  title: 'Appointment Booking System',
  description: 'Complete documentation for the appointment booking system',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' },
      { text: 'Deployment', link: '/deployment/' },
      { text: 'Development', link: '/development/' },
      { text: 'User Guide', link: '/user-guide/' },
    ],
    sidebar: {
      '/api/': [
        {
          text: 'API Documentation',
          items: [
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'Appointments', link: '/api/appointments' },
            { text: 'Users', link: '/api/users' },
            { text: 'Provider', link: '/api/provider' },
          ]
        }
      ],
      '/deployment/': [
        {
          text: 'Deployment Guides',
          items: [
            { text: 'Docker Setup', link: '/deployment/docker' },
            { text: 'Production', link: '/deployment/production' },
            { text: 'Environment', link: '/deployment/environment' },
          ]
        }
      ],
      '/development/': [
        {
          text: 'Developer Setup',
          items: [
            { text: 'Getting Started', link: '/development/getting-started' },
            { text: 'Coding Standards', link: '/development/coding-standards' },
            { text: 'Testing', link: '/development/testing' },
          ]
        }
      ],
      '/user-guide/': [
        {
          text: 'User Documentation',
          items: [
            { text: 'Booking Appointments', link: '/user-guide/booking' },
            { text: 'Calendar Integration', link: '/user-guide/calendar' },
            { text: 'Troubleshooting', link: '/user-guide/troubleshooting' },
          ]
        }
      ],
      '/': [
        {
          text: 'System Overview',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Architecture', link: '/architecture/overview' },
            { text: 'Database', link: '/architecture/database' },
            { text: 'Integrations', link: '/architecture/integrations' },
          ]
        }
      ]
    }
  }
}