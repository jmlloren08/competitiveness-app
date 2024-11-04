<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class ChatBotController extends Controller
{
    public function ChatBot(Request $request)
    {
        $userMessage = $request->input('message');
        $apiKey = "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";

        Log::info("OpenAI API Key: " . $apiKey);

        if (!$apiKey) {
            Log::error('OpenAI API key not found.');
            return response()->json(['error' => 'OpenAI API key not found.']);
        }

        $client = new Client();
        try {
            Log::info("Sending message to OpenAI: {$userMessage}");
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => [['role' => 'user', 'content' => $userMessage]],
                    'max_tokens' => 100,
                    'temperature' => 0.7
                ],
                'verify' => false
            ]);

            $responseBody = json_decode($response->getBody()->getContents(), true);
            $botResponse = $responseBody['choices'][0]['message']['content'];

            Log::info("Received response from OpenAI: {$botResponse}");
            return response()->json(['response' => $botResponse]);
        } catch (\Exception $e) {
            Log::error("Failed to get response from OpenAI: " . $e->getMessage());
            return response()->json(['error' => 'Failed to get response from OpenAI.']);
        }
    }
}
