<!--?* This is lecture 02  -->

<!--! The foremost thing we learn is that npm is not "Node Package Manager" it is a manager that manages packages -->

<!--? How to npm init and what are the things of it. -->

{

<!--* Installing the dependencies from npm -->
<!--? Types of dependencies => -->

1.  Dev Dependencies -> Dependencies which are used during the development phase => (npm insatll -D dependencty-name)
2.  Normal Dependencies => Dependencies which are used in the production also => (npm install dependency-name)

}

<!--! parcel  -->

{
eg., => "parcel": "^2.15.4"

<!--? left shows the dependency name and right side shows the version number -->
<!-- *this "^" sign is called "caret", -->

<!--todo: this ^ caret shows that the version of the dependencies can be upgraded in the future when a new "minor update" is released. -->

<!-- todo: "~" tilde sign is also used but it is used for "major update" automatically update major update but it is not reccommended -->

}

{

<!--! package-lock.json  -->
<!--* it keeps a track of what dependencies are installed and especially the exact version of the dependencies which. -->
<!--* This "locks down" the versions, ensuring that npm install will always install the identical set of packages and versions  -->

}

{

<!--! node_modules -->
<!--* it contains all the code that is fetched from the npm for the dependencies we installed, like a database for the dependencies and packages that we used -->
<!--? a dependency or package can have their own set of dependencies these dependencies are called transit dependencies -->
<!--? node_modules contains all the set of dependencies which are needed by the dependencies we installed in out app -->

}
