<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  string|null  ...$guards
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $role = auth()->user()->role;
                if ( $role === 'admin') {
                    return redirect(RouteServiceProvider::ADMIN);
                }
                elseif ( $role === 'manager') {
                    return redirect(RouteServiceProvider::MANAGER);
                }
                elseif ( $role === 'dealer') {
                    return redirect(RouteServiceProvider::DEALER);
                }
//                    return redirect(RouteServiceProvider::HOME);

            }
        }

        return $next($request);
    }
}
