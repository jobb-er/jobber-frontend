const en = {
  loader: {
    pleaseWait: "Please wait a second",
    optimising: "We are optimising everything for you",
  },
  menu: {
    offers: "Offers",
    messages: "Messages",
    myOffers: "My offers",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
  },
  loginRegisterWrapper: {
    title: "The new powerful tool to find wonderful job.",
  },
  login: {
    login: "Login",
    noAccount: "Don't have account yet?",
    register: "Register",
    email: "E-mail",
    emailPlaceholder: "Your e-mail",
    password: "Password",
    errors: {
      fieldRequired: "{{ field }} is required!",
      wrongEmail: "Wrong email format!",
      somethingWentWrong: "Something went wrong, try again",
    },
  },
  register: {
    register: "Register",
    firstName: "First name",
    firstNamePlaceholder: "Your first name",
    lastName: "Last name",
    lastNamePlaceholder: "Your last name",
    password: "Password",
    confirmPassword: "Confirm password",
    role: "Role",
    rolePlaceholder: "Choose role",
    email: "E-mail",
    emailPlaceholder: "Your e-mail",
    acceptTerms: "I accept terms and conditions",
    haveAccount: "Already have an account?",
    login: "Login",
    errors: {
      fieldRequired: "{{ field }} is required!",
      tooWeakPassword:
        "At least 8 characters with capital letter, digit and special sign",
      notTheSamePassword: "Password is not the same!",
      acceptTerms: "You have to accept terms!",
      wrongEmail: "Wrong email format!",
      accountExists: "Account for this email already exists!",
      somethingWentWrong: "Something went wrong, try again",
    },
  },
  roles: {
    candidate: "Candidate",
    recruiter: "Recruiter",
  },
  allOffers: {
    search: "Search offers",
    location: "Location",
    recently: "Recently added",
    salary: "With salary",
    all: "All offers",
    new: "New",
    notProvided: "Not provided",
    clear: "Clear filter",
  },
  offer: {
    goBack: "Go back to offers",
    new: "New",
    description: "Description",
    apply: "Apply",
    message: "Message",
    added: "Added",
    notProvided: "Not provided",
    successTitle: "You applied to an offer!",
    goToMyOffers: "Go to my offers",
  },
  myOffers: {
    recruiter: {
      createdByYou: "Created by you",
      posted: "Posted",
      addNew: "Add new offer",
      goBack: "Go back to my offers",
      title: "Title",
      titlePlaceholder: "Offer title",
      companyName: "Company name",
      location: "Location",
      locationPlaceholder: "Company location",
      experience: "Needed experience",
      experiencePlaceholder: "1+ years",
      bottomPayrange: "Bottom payrange",
      topPayrange: "Top payrange",
      currency: "Currency",
      description: "Description",
      descriptionPlaceholder: "More details about this offer",
      post: "Post",
      cancel: "Cancel",
      update: "Update",
      submit: "Submit",
      accept: "Accept",
      reject: "Reject",
      message: "Message",
      statuses: {
        rejected: "Rejected",
        accepted: "Accepted",
      },
      emptyOffers: "You don't have any offers",
      errors: {
        fieldRequired: "{{ field }} is required!",
      },
    },
    candidate: {
      didntApply: "You didn't apply for job",
      startSearching: "Start searching",
      applied: "Applied ({{ number }})",
      searchAndApply: "Search and apply for more offers",
      statuses: {
        applied: "Applied",
        rejected: "Rejected",
        accepted: "Accepted",
      },
    },
  },
  settings: {
    app: "App",
    language: "Language",
    account: "Account",
    changePassword: "Change password",
    confirmPassword: "Confirm password",
    password: "Password",
    changeEmail: "Change e-mail",
    email: "E-mail",
    deactivate: "Deactivate and delete account",
    changeAccountData: "Change account data",
    confirm: "Confirm",
    cancel: "Cancel",
    change: "Change",
    toConfirm: "To confirm operation, provide current password to your account",
    alert:
      "This operation is not reversible, but you can create a new account on the same email",
    errorAlert: "Something went wrong, try again",
    errors: {
      tooWeakPassword:
        "At least 8 characters with capital letter, digit and special sign",
      notTheSamePassword: "Password is not the same!",
      wrongEmail: "Wrong email format!",
    },
  },
  languages: {
    en: "English",
    pl: "Polish",
  },
  profile: {
    tabs: {
      about: "About",
      experience: "Experience",
      education: "Education",
      additional: "Additional",
    },
    common: {
      uploadAvatar: "Upload avatar",
      firstName: "First name",
      lastName: "Last name",
      email: "E-mail",
      phoneNumber: "Phone number",
      country: "Country",
      linkedin: "LinkedIn",
      link: "Link",
    },
    candidate: {
      portfolio: "Portfolio",
      bio: "Bio",
      bioPlaceholder: "More details about yourself",
      jobTitle: "Job title",
      title: "Title",
      company: "Company",
      country: "Country",
      from: "From",
      to: "To",
      mmYyyy: "MM/YYYY",
      details: "Details",
      detailsPlaceholder: "More details about it",
      addNewExperience: "Add new experience section",
      school: "School",
      degree: "Degree",
      name: "Name",
      addNewEducation: "Add new education section",
      additionalTitle: "Additional title/name",
      addNewAdditional: "Add new additional section",
    },
    recruiter: {
      company: "Company",
    },
    errors: {
      fieldRequired: "{{ field }} is required!",
      wrongEmail: "Wrong email format!",
      wrongUrl: "Wrong URL format!",
    },
    save: "Save",
    cancel: "Cancel",
  },
};

export default en;
