# API Configuration Guide

## Environment Variables

The quick consult API uses the existing `REACT_APP_API_URL` from your `.env` file:

```env
# Main API URL (used for all services including quick consult)
REACT_APP_API_URL=http://localhost:3500/

# Environment
REACT_APP_ENV=development
```

## API Structure

### Quick Consult API

-   **Base URL**: Uses `REACT_APP_API_URL` from your .env file
-   **Endpoint**: `/api/quick-consult`
-   **Method**: POST
-   **Content-Type**: application/json

### Request Payload

```json
{
    "name": "Sk Saif",
    "mobileNumber": "6289195314",
    "email": "thesksaif@gmail.com",
    "propertyName": "Sk Villa",
    "whatsapp": true
}
```

### Response Format

```json
{
    "message": "Consultation submitted",
    "quickConsult": {
        "name": "Sk Saif",
        "mobileNumber": "6289195314",
        "email": "thesksaif@gmail.com",
        "propertyName": "Sk Villa",
        "whatsapp": true,
        "otpVerified": false,
        "_id": "686d1399835f62fc15916e96",
        "submittedAt": "2025-07-08T12:48:25.631Z",
        "updatedAt": "2025-07-08T12:48:25.633Z",
        "__v": 0
    }
}
```

## Project Structure

### Context

-   **File**: `src/contexts/QuickConsultContext.js`
-   **Purpose**: Manages API state and provides methods for quick consult operations

### Hook

-   **File**: `src/hooks/useQuickConsult.js`
-   **Purpose**: Custom hook to access quick consult context

### Axios Configuration

-   **File**: `src/utils/axios.js`
-   **Purpose**: Uses existing axiosServices with `REACT_APP_API_URL`

### Component

-   **File**: `src/views/pages/landing/FloatingConsultForm.js`
-   **Purpose**: UI component that uses the quick consult service

## Usage

The QuickConsultProvider is automatically wrapped around the app in `src/App.js`. You can use the `useQuickConsult` hook in any component:

```javascript
import useQuickConsult from 'hooks/useQuickConsult';

const MyComponent = () => {
    const { loading, error, submitQuickConsult, clearError } = useQuickConsult();

    // Use the methods as needed
};
```

## Features

-   ✅ Uses existing `REACT_APP_API_URL` configuration
-   ✅ No additional environment variables needed
-   ✅ Proper error handling
-   ✅ Loading states
-   ✅ Context-based state management
-   ✅ Red color theme integration
-   ✅ Snackbar notifications
-   ✅ Form validation
-   ✅ Professional code structure
