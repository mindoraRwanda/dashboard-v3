# Mindora Dashboard

A professional healthcare management dashboard for doctors and administrators in Rwanda. Built with modern technologies and shadcn/ui components, this dashboard serves as the comprehensive web interface for the Mindora mobile application.

## ✨ Features

### 🩺 Doctor Dashboard
- **Patient Management**: Comprehensive patient records with search and filtering
- **Appointment Scheduling**: Full appointment management with status tracking
- **Community Engagement**: Monitor and participate in health discussions
- **Interactive Patient Modals**: Detailed patient information with medical history
- **Real-time Analytics**: Live statistics and performance metrics

### 👨‍💼 Admin Dashboard
- **System Overview**: Complete platform analytics with 1,040+ users
- **Partner Management**: Monitor 7 hospitals and 3 universities across Rwanda
- **Advanced Analytics**: Interactive charts with Recharts integration
- **User Demographics**: Age groups, province distribution, and condition analytics
- **System Health**: Real-time monitoring and performance metrics

### 🏥 Multi-Page Architecture
- **Dashboard Home**: Overview with key metrics and quick actions
- **Patients Page**: Comprehensive patient management with search/filter
- **Appointments Page**: Full appointment scheduling and management
- **Community Page**: Social features with posts and meditation sessions
- **Analytics Page**: Advanced charts and business intelligence
- **Responsive Sidebar**: Role-based navigation with doctor/admin views

## 🇷🇼 Rwanda Context

Authentic Rwandan healthcare ecosystem integration:
- **Partner Hospitals**: King Faisal Hospital, CHUK, CHUB, Rwanda Military Hospital
- **Universities**: University of Rwanda, ULK, Mount Kenya University Rwanda
- **Geographic Data**: All 5 provinces with authentic district names
- **Cultural Integration**: Local names, phone formats (+250), and healthcare practices

## 🛠 Technology Stack

- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icons
- **State Management**: React hooks and context
- **Build Tool**: Turbopack for fast development

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Switch Roles**
   Use the role switcher in the sidebar to toggle between Doctor and Admin views

## 📁 Project Structure

```
app/
├── dashboard/
│   ├── layout.tsx              # Main dashboard layout with sidebar
│   ├── page.tsx                # Dashboard home page
│   ├── patients/
│   │   └── page.tsx           # Patient management page
│   ├── appointments/
│   │   └── page.tsx           # Appointment scheduling page
│   ├── community/
│   │   └── page.tsx           # Community and meditation page
│   └── analytics/
│       └── page.tsx           # Advanced analytics with charts
├── components/
│   └── ui/                    # shadcn/ui components
├── data/
│   └── dummyData.ts          # Rwanda-specific dummy data
├── lib/
│   └── utils.ts              # Utility functions
└── globals.css               # Global styles with CSS variables
```

## 🎨 Design System

### Color Palette
- **Primary**: #9333EA (Purple) - Brand color
- **Secondary**: Zinc color scheme from shadcn/ui
- **Success**: Green variants for positive actions
- **Warning**: Yellow/Orange for pending states
- **Error**: Red variants for critical actions

### Components
- **Cards**: Clean, shadowed containers for content sections
- **Badges**: Status indicators with semantic colors
- **Buttons**: Consistent styling with hover states
- **Modals**: Accessible dialogs for detailed views
- **Charts**: Interactive data visualizations

## 📊 Key Pages

### Dashboard Home (`/dashboard`)
- Welcome section with personalized greeting
- Key performance metrics in card layout
- Today's appointments and recent patients
- Community activity feed
- Quick action buttons

### Patients (`/dashboard/patients`)
- Searchable patient directory
- Patient status filtering
- Detailed patient modals with medical history
- Patient statistics overview
- Add new patient functionality

### Appointments (`/dashboard/appointments`)
- Today's appointment schedule
- Appointment status management
- Search and filter capabilities
- Appointment analytics
- Quick scheduling actions

### Community (`/dashboard/community`)
- Health discussion posts
- Meditation session management
- Community engagement metrics
- Trending topics sidebar
- Active contributor highlights

### Analytics (`/dashboard/analytics`)
- Interactive charts with Recharts
- User growth trends
- Province-wise distribution
- Medical condition analytics
- Age demographic breakdowns
- System performance metrics

## 🔧 Customization

### Adding New Pages
1. Create new page in `app/dashboard/[page-name]/page.tsx`
2. Add route to sidebar navigation in `app/dashboard/layout.tsx`
3. Update role permissions if needed

### Modifying Data
- Update `app/data/dummyData.ts` for new dummy data
- Maintain Rwanda context and authentic names
- Follow existing data structure patterns

### Styling Changes
- Modify `app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize shadcn/ui components as needed

## 🌟 Professional Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safety**: Full TypeScript coverage for reliability
- **Performance**: Optimized with Next.js 16 and Turbopack
- **Modern UI**: Professional design with shadcn/ui components
- **Interactive Charts**: Rich data visualization with Recharts
- **Role-Based Access**: Dynamic navigation based on user role
- **Search & Filter**: Advanced filtering across all data types

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔮 Future Enhancements

- **Backend Integration**: Connect to real healthcare APIs
- **Authentication**: User login and role management
- **Real-time Updates**: WebSocket integration for live data
- **Mobile App Sync**: Synchronization with Mindora mobile app
- **Multi-language**: Support for Kinyarwanda, French, English
- **Advanced Analytics**: Machine learning insights
- **Telemedicine**: Video consultation integration
- **Notification System**: Real-time alerts and reminders

---

Built with ❤️ for Rwanda's healthcare ecosystem using modern web technologies.