import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect, useRef } from "react";


function LoginButton() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const [ profileMenuVisible, setProfileMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
  
    useEffect(
        () => {
            if (user) {
                fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((response) => { 
                    if (response.status === 401) {
                        setProfile(null);
                        return;
                    }
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    setProfile(data)
                })
                .catch((err) => {
                    console.log(err)
                });
            } else {
                setProfile(null);
            }
        },
        [ user ]
    );
  
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
        setProfileMenuVisible(false);
    };

    const toggleMenu = () => {
        setProfileMenuVisible(!profileMenuVisible);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setProfileMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="h-12 items-center flex justify-center items-center">
            {profile ? (
                <div>
                    <img 
                        src={profile.picture} 
                        alt="user profile" 
                        className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer object-cover"
                        onClick={toggleMenu}
                    />
                     {profileMenuVisible && (
                        <div
                            ref={menuRef}
                             className="fixed top-0 right-0 w-48 h-full bg-white border-l border-gray-300 flex flex-col items-center pt-5"
                        >
                            <img 
                                src={profile.picture} 
                                alt="user profile" 
                                className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer"
                                onClick={toggleMenu}
                            />
                            <button className='text-black' onClick={logOut}>Log out</button>
                        </div>
                    )}
                </div>
            ) : (
                <button className='text-white' onClick={() => login()}>Sign In </button>
            )}
        </div>
    );
}

export default LoginButton;