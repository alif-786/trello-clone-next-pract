const ClerkLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className=" bg-gradient-to-r from-teal-400 to-yellow-200 h-full flex justify-center items-center">
            {children}
        </div>
    );
};

export default ClerkLayout;
