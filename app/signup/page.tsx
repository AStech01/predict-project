// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// // import { GoogleIcon } from '@/components/ui/icons';
// // import SocialButton from '@/components/auth/SocialButton';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '@/components/ui/form';
// import { Separator } from '@/components/ui/separator';

// const formSchema = z.object({
//   email: z.string().email('Please enter a valid email address'),
//   password: z
//     .string()
//     .min(8, 'Password must be at least 8 characters')
//     .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
//     .regex(/[a-z]/, 'Password must include at least one lowercase letter')
//     .regex(/[0-9]/, 'Password must include at least one number'),
//   confirmPassword: z.string(),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords do not match',
//   path: ['confirmPassword'],
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function SignUpForm() {
//     const router = useRouter();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//   });

//   const onSubmit = async (values: FormValues) => {
//     setIsSubmitting(true);
    
//     // Simulate API call delay
//     await new Promise((resolve) => setTimeout(resolve, 1000));
    
//     console.log(values);
//     setIsSubmitting(false);
    
//     // Reset form after successful submission
//     form.reset();
//   };

//   const handleGoogleSignIn = () => {
//     console.log('Google sign in clicked');
//     // Implement Google sign-in logic here
//   };

//   return (
//     <div className="w-full space-y-6">
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold text-gray-900">Sign Up</h1>
//         <p className="mt-2 text-sm text-gray-600">
//           Join <span className="font-medium">1000+</span> predicting trends
//           <br />
//           and shaping the future.
//         </p>
//       </div>
// {/*
//       <SocialButton
//         icon={<GoogleIcon className="h-5 w-5" />}
//         text="Log in with Google"
//         onClick={handleGoogleSignIn}
//       /> */}

//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <Separator className="w-full" />
//         </div>
//         <div className="relative flex justify-center">
//           <span className="bg-white px-2 text-sm text-gray-500">or</span>
//         </div>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="Email"
//                     className="h-12"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="h-12"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="confirmPassword"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     placeholder="Confirm Password"
//                     className="h-12"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className="h-12 w-full bg-gray-600 text-white hover:bg-gray-700"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Processing...' : 'Continue'}
//           </Button>
//         </form>
//       </Form>

//       {/* <p className="text-center text-sm text-gray-600">
//         Don't have an account?{' '}
//         <a href="#" className="font-medium text-gray-900 hover:underline">
//           Sign Up
//         </a>
//       </p> */}
//            <p className="text-center text-sm text-gray-600">
//       Already have an account?{' '}
//       <button
//         onClick={() => router.push('/login')}
//         className="font-medium text-gray-900 hover:underline"
//       >
//         Log In
//       </button>
//     </p>
//     </div>
//   );
// }

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';

const formSchema = z
  .object({
    email: z.string().email('Please enter a valid email'),
    password: z
      .string()
      .min(8, 'Must be at least 8 characters')
      .regex(/[A-Z]/, 'Include at least one uppercase letter')
      .regex(/[a-z]/, 'Include at least one lowercase letter')
      .regex(/[0-9]/, 'Include at least one number'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormValues = z.infer<typeof formSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Registered user:', values);
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <p className="mt-2 text-sm text-gray-600">
          Join <span className="font-medium">1000+</span> predicting trends
          <br />
          and shaping the future.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">or</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-12 w-full bg-black/60 rounded-[33px] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Continue'}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => router.push('/login')}
          className="font-medium text-gray-900 hover:underline"
        >
          Log In
        </button>
      </p>
    </div>
  );
}
