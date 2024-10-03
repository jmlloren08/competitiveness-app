<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|lowercase|max:255|unique:' . ContactUs::class,
                'message' => 'required|string|max:1000'
            ]);

            ContactUs::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message
            ]);

            return redirect()->route('contact-us')->with('success', 'Thank you for your feedback! Your message has been sent successfully.');
        } catch (\Exception $e) {
            return redirect()->route('contact-us')->withErrors(['error' => $e->getMessage() . ' An error occurred while sending your message.']);
        }
    }
}
