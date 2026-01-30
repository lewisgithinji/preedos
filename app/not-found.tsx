import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">
                Page Not Found
            </h2>
            <p className="text-lg text-secondary-600 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button size="lg">Return Home</Button>
            </Link>
        </div>
    )
}
