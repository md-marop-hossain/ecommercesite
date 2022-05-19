import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Alert } from '@mui/material';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://lit-escarpment-04985.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail(' ');
                    console.log(data)
                }
            })
        e.target.reset();
        e.preventDefault();
    }
    return (
        <div className='page-bg'>
            <div class="flex flex-col  ">
                <div class="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
                    <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                        <div class="text-center mb-4">
                            <h6 class="font-semibold text-[#063970] text-xl">Make Admin</h6>
                        </div>
                        <form
                            onSubmit={handleAdminSubmit}
                            class="space-y-5">
                            <div>
                                <input
                                    onBlur={handleOnBlur}
                                    id="email" type="email" class="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" required />
                            </div>

                            <Stack spacing={2} direction="row">
                                <Button
                                    className='w-full'
                                    type="submit"
                                    variant="contained" endIcon={<SendIcon />}>
                                    Send
                                </Button>
                                {success && <Alert severity="success">Made Admin successfully!</Alert>}
                            </Stack>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;