const quizJSON = {
    testCode: 'unique bhi toh bnana h',
    testTitle: 'naam kya hai',
    startDate: '25-02-2020',
    endDate: '31-02-2020',
    maxMarks: '30',
    duration: '30',
    testType: 'Either assesment or Assignment, String ',
    questions: [
        // question1
        {
            id: '01',
            questionCode: 'QUE-1',
            question: `The Command do you use to create Linux file system is`,
            image: '',
            options: [{
                option: 'fsck',
                value: '0'
            },
            {
                option: 'mkfs',
                value: '1'
            },
            {
                option: 'mount',
                value: '0'
            },
            {
                option: 'None of the mentioned',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        // question2
        {
            id: '02',
            question: `Core of Linux operating system is_____________ `,
            questionCode: 'QUE-2',
            image: '',
            options: [{
                option: 'Shell',
                value: '0'
            },
            {
                option: 'Kernel',
                value: '1'
            },
            {
                option: 'Terminal',
                value: '0'
            },
            {
                option: 'Command',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 3
        {
            id: '03',
            question: `Which of the following directory contains configuration files in Linux?`,
            questionCode: 'QUE-3',
            image: '',
            options: [{
                option: '/dev/',
                value: '0'
            },
            {
                option: '/etc/',
                value: '1'
            },
            {
                option: '/bin',
                value: '0'
            },
            {
                option: '/root/',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 4
        {
            id: '04',
            question: `The maximum filename size in Linux in bytes is 255.`,
            questionCode: 'QUE-4',
            image: '',
            options: [{
                option: 'True',
                value: '1'
            },
            {
                option: 'False',
                value: '0'
            },
            {
                option: '',
                value: '0'
            },
            {
                option: '',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 5
        {
            id: '05',
            question: `Which command is used to remove files?`,
            questionCode: 'QUE-5',
            image: '',
            options: [{
                option: 'rm',
                value: '1'
            },
            {
                option: 'dm',
                value: '0'
            },
            {
                option: 'erase',
                value: '0'
            },
            {
                option: 'delete',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 6
        {
            id: '06',
            question: `_________ command is used to remove the directory.`,
            questionCode: 'QUE-6',
            image: '',
            options: [{
                option: 'rdir',
                value: '0'
            },
            {
                option: 'rd',
                value: '0'
            },
            {
                option: 'rmdir',
                value: '1'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 7
        {
            id: '07',
            question: `How many primary partitions can exist on one drive?`,
            questionCode: 'QUE-7',
            image: '',
            options: [{
                option: '16',
                value: '0'
            },
            {
                option: '1',
                value: '0'
            },
            {
                option: '2',
                value: '0'
            },
            {
                option: '4',
                value: '1'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 8
        {
            id: '08',
            question: `FSF stand for -`,
            questionCode: 'QUE-8',
            image: '',
            options: [{
                option: 'Free Software File',
                value: '0'
            },
            {
                option: 'Free Software Foundation',
                value: '1'
            },
            {
                option: 'First Serve First',
                value: '0'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 9
        {
            id: '09',
            question: `__________is not a communication command.
            `,
            questionCode: 'QUE-9',
            image: '',
            options: [{
                option: 'mail',
                value: '0'
            },
            {
                option: 'mesg',
                value: '0'
            },
            {
                option: 'grep',
                value: '1'
            },
            {
                option: 'write',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 10
        {
            id: '10',
            question: `Which of the following combination of keys is used to exit from terminal?
            `,
            questionCode: 'QUE-10',
            image: '',
            options: [{
                option: 'Ctrl + z',
                value: '0'
            },
            {
                option: 'Ctrl + t',
                value: '0'
            },
            {
                option: 'Ctrl + d',
                value: '1'
            },
            {
                option: 'Ctrl + e',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 11
        {
            id: '11',
            question: `The OS which is not based on Linux is - `,
            questionCode: 'QUE-11',
            image: '',
            options: [{
                option: 'BSD',
                value: '1'
            },
            {
                option: 'Ubuntu',
                value: '0'
            },
            {
                option: 'CentOs',
                value: '0'
            },
            {
                option: 'Redhat',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 12
        {
            id: '12',
            question: ` ___________command is used to record session in Linux.`,
            questionCode: 'QUE-12',
            image: '',
            options: [{
                option: 'session',
                value: '0'
            },
            {
                option: 'script',
                value: '0'
            },
            {
                option: 'both 1 and 2',
                value: '1'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 13
        {
            id: '13',
            question: `mv command can be used for--
            `,
            questionCode: 'QUE-13',
            image: '',
            options: [{
                option: 'Renaming a file',
                value: '0'
            },
            {
                option: 'Move the file to different directory.',
                value: '0'
            },
            {
                option: 'Both 1 and 2',
                value: '1'
            },
            {
                option: 'None of these',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 14
        {
            id: '14',
            question: `The range of nice number in linux system is -`,
            questionCode: 'QUE-14',
            image: '',
            options: [{
                option: '-20 to 0',
                value: '0'
            },
            {
                option: '-20 to 19',
                value: '1'
            },
            {
                option: '0 to 19',
                value: '0'
            },
            {
                option: '10 to 10',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 15
        {
            id: '15',
            question: `User passwords are stored in _____________`,
            questionCode: 'QUE-15',
            image: '',
            options: [{
                option: '/root/password',
                value: '0'
            },
            {
                option: '/etc/password',
                value: '0'
            },
            {
                option: '/etc/passwd ',
                value: '1'
            },
            {
                option: '/root/passwd',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 16
        {
            id: '16',
            question: `Which is the default file system type of Linux.`,
            questionCode: 'QUE-16',
            image: '',
            options: [{
                option: 'etx',
                value: '0'
            },
            {
                option: 'ext2',
                value: '0'
            },
            {
                option: 'etx3',
                value: '1'
            },
            {
                option: 'mimix',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 17
        {
            id: '17',
            question: `Hidden file can be viewed using ______.`,
            questionCode: 'QUE-17',
            image: '',
            options: [{
                option: 'ls -a',
                value: '1'
            },
            {
                option: 'ls -l',
                value: '0'
            },
            {
                option: 'ls -h',
                value: '0'
            },
            {
                option: 'ls -k',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 18
        {
            id: '18',
            question: `Linux is an operating system based on UNIX and was first introduced by Linus Torvalds.`,
            questionCode: 'QUE-18',
            image: '',
            options: [{
                option: 'True',
                value: '1'
            },
            {
                option: 'False',
                value: '0'
            },
            {
                option: '',
                value: '0'
            },
            {
                option: '',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 19
        {
            id: '19',
            question: `Which command is used to extract intermediate result in a pipeline -`,
            questionCode: 'QUE-19',
            image: '',
            options: [{
                option: 'extract',
                value: '0'
            },
            {
                option: 'tee',
                value: '1'
            },
            {
                option: 'exec',
                value: '0'
            },
            {
                option: 'chgrp',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 20
        {
            id: '20',
            question: `Which of the following sign represents the user home directory?`,
            questionCode: 'QUE-20',
            image: '',
            options: [{
                option: '.',
                value: '0'
            },
            {
                option: '/',
                value: '0'
            },
            {
                option: '..',
                value: '0'
            },
            {
                option: '~',
                value: '1'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 21
        {
            id: '21',
            question: `The dmesg command shows ..................`,
            questionCode: 'QUE-21',
            image: '',
            options: [{
                option: 'Kernel log messages',
                value: '1'
            },
            {
                option: 'The daemon log messages',
                value: '0'
            },
            {
                option: 'The user login logoff attempts',
                value: '0'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 22
        {
            id: '22',
            question: `Which command is used to set terminal IO characteristic?
            `,
            questionCode: 'QUE-22',
            image: '',
            options: [{
                option: 'tty',
                value: '0'
            },
            {
                option: 'ctty',
                value: '0'
            },
            {
                option: 'stty',
                value: '1'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 23
        {
            id: '23',
            question: `Which command is used to display the operating system name?`,
            questionCode: 'QUE-23',
            image: '',
            options: [{
                option: 'os',
                value: '0'
            },
            {
                option: 'unix',
                value: '0'
            },
            {
                option: 'uname',
                value: '1'
            },
            {
                option: 'kernel',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 24
        {
            id: '24',
            question: `Which command is used to display the unix version?`,
            questionCode: 'QUE-24',
            image: '',
            options: [{
                option: 'kernel',
                value: '0'
            },
            {
                option: 'uname -t',
                value: '0'
            },
            {
                option: 'uname -r',
                value: '1'
            },
            {
                option: 'uname -n',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 25
        {
            id: '25',
            question: `Which command is used to view compressed text file contents?`,
            questionCode: 'QUE-25',
            image: '',
            options: [{
                option: 'cat',
                value: '0'
            },
            {
                option: 'zcat',
                value: '1'
            },
            {
                option: 'type',
                value: '0'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 26
        {
            id: '26',
            question: `a directory is a type of file. True or false?`,
            questionCode: 'QUE-26',
            image: '',
            options: [{
                option: 'True',
                value: '1'
            },
            {
                option: 'False',
                value: '0'
            },
            {
                option: '',
                value: '0'
            },
            {
                option: '',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 27
        {
            id: '27',
            question: `Under the root directory in linux, which directory contains system commands and utilities?
            `,
            questionCode: 'QUE-27',
            image: '',
            options: [{
                option: '/usr',
                value: '1'
            },
            {
                option: '/tmp',
                value: '0'
            },
            {
                option: '/sbin',
                value: '0'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 28
        {
            id: '28',
            question: `The linux kernel exists as a file named ...............
            `,
            questionCode: 'QUE-28',
            image: '',
            options: [{
                option: 'vmlinuz',
                value: '1'
            },
            {
                option: 'vmlinux',
                value: '0'
            },
            {
                option: 'kernel',
                value: '0'
            },
            {
                option: 'None of the above',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 29
        {
            id: '29',
            question: `This default linux directory contains many of the linux commands.
            `,
            questionCode: 'QUE-29',
            image: '',
            options: [{
                option: '/bin',
                value: '1'
            },
            {
                option: '/doc',
                value: '0'
            },
            {
                option: '/lib',
                value: '0'
            },
            {
                option: '/info',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        },
        //question 30
        {
            id: '30',
            question: `Linux is an example of a(n) ______.`,
            questionCode: 'QUE-30',
            image: '',
            options: [{
                option: 'operating system',
                value: '1'
            },
            {
                option: 'broswer',
                value: '0'
            },
            {
                option: 'word processing software',
                value: '0'
            },
            {
                option: 'photo Editor',
                value: '0'
            }],
            questionType: 'Either SCBQ (Single choice based question) or MCBQ (Multilple....)',
            negativeMarking: 'True or false',
            negativeMarksWeighate: 'Negative marks for this question',

            correctAnswer: 'Always an Array, will have single item incase of SCBQ and multiple items in case of MCBQ',
        }

    ],
};

/*
NOTE: Keys can be added or removed based on the requirements for sending or fetching data from DB
*/

/*
NOTE: Keys can be added or removed based on the requirements for sending or fetching data from DB
*/
export default quizJSON;